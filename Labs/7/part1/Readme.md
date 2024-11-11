##### AWS CodePipeline with S3 #####
"In this tutorial, you create a two-stage pipeline that uses a versioned S3 source bucket and CodeDeploy to release a sample application."

### Create S3 source bucket for app ###
```sh
aws s3 mb s3://comp4964-lab7-pipeline
```

### Enable bucket versioning ###
```sh
aws s3api put-bucket-versioning \
--bucket comp4964-lab7-pipeline \
--versioning-configuration Status=Enabled
```

### Download Windows or Linux Sample App ###
```sh
https://docs.aws.amazon.com/codepipeline/latest/userguide/samples/SampleApp_Windows.zip
https://docs.aws.amazon.com/codepipeline/latest/userguide/samples/SampleApp_Linux.zip
```

### Copy files to S3 ###
## **Copy whole directory didn't work** ##
```sh
aws s3 cp ./SampleApp_Windows/* s3://comp4964-lab7-pipeline
```

