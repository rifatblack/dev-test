provider "aws" {
  region = "us-east-1"  # Change to your preferred region
}

# Create an S3 bucket for the React app
resource "aws_s3_bucket" "react_app_bucket" {
  bucket = "your-react-app-bucket-name"  # Replace with a unique bucket name
  acl    = "public-read"
}

# Configure the S3 bucket for website hosting
resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.react_app_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# S3 bucket policy to make content public
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.react_app_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "s3:GetObject"
        Effect    = "Allow"
        Resource  = "${aws_s3_bucket.react_app_bucket.arn}/*"
        Principal = "*"
      }
    ]
  })
}

# Create a CloudFront distribution
resource "aws_cloudfront_distribution" "react_app_distribution" {
  origin {
    domain_name = aws_s3_bucket.react_app_bucket.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.react_app_bucket.id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled      = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.react_app_bucket.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # Add a restrictions block (this is required now)
  restrictions {
    geo_restriction {
      restriction_type = "none"  # You can set restrictions for specific countries if required
    }
  }

  price_class = "PriceClass_100"

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Create an origin access identity for CloudFront to access S3
resource "aws_cloudfront_origin_access_identity" "origin_identity" {
  comment = "Access S3 bucket content"
}

# Output S3 bucket name and CloudFront URL
output "s3_bucket_name" {
  value = aws_s3_bucket.react_app_bucket.bucket
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.react_app_distribution.domain_name
}
