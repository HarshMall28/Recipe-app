provider "aws" {
  region = "eu-west-1",
  access_key = "AKIAT3YXLKUG4Z62OUZT",
  secret_key = "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"
} 

resource "aws_instance" "AWS-instance" {
  count 	= 1 
  ami           = "ami-096800910c1b781ba"
  instance_type = "t2.micro"
  tags = {
    Name = "Node1"
  }

}
