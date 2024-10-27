### Make S3 bucket ###
```sh
aws s3 mb s3://comp4964-a2-mho
```

### Move images to S3 bucket ###
```sh
aws s3 mv ./1.jpg s3://comp4964-a2-mho
aws s3 mv ./2.jpg s3://comp4964-a2-mho
aws s3 mv ./3.jpg s3://comp4964-a2-mho
```

### Update Bucket public access block to allow usage of bucket policy###
```sh
aws s3api put-public-access-block \
--bucket comp4964-mt-mho \
--public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

### Update Bucket Policy ###
```sh
aws s3api put-bucket-policy --bucket comp4964-mt-mho --policy '{
   "Statement": [
        {
            "Effect": "Allow",
            "Principal":  "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::comp4964-mt-mho/*"
        }
   ]
}'
```

### Copy existing index.html to S3 bucket ###
```sh
aws s3 cp ./index.html s3://comp4964-mt-mho
```

### Build container, run it, and test ###
```sh
docker build -t mtnode .
docker run -d -p 8000:8000 --name=myWeb1 mtnode
elinks http://localhost:8000
OR
curl -v http://localhost:8000
```

```sh
docker stop myWeb1
docker rm myWeb1
```

### Push image ###
```sh
```