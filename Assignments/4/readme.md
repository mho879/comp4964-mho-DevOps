Documentation for AWS CodePipeline
1. Introduction
    This document outlines the architecture and setup of the AWS CodePipeline for continuous integration and continuous deployment (CI/CD) of the React application. It includes instructions on how to set up the pipeline, how to maintain it, and common troubleshooting steps.

2. Pipeline Architecture
    Overview
    The pipeline is designed to automate the process of:

    Fetching the source code from a GitHub repository.
    Building the application using AWS CodeBuild.
    Deploying the built application to an S3 bucket for static website hosting.
    The pipeline consists of the following stages:

    Source: GitHub repository integration to fetch the latest code.
    Build: AWS CodeBuild compiles the React app and creates the build artifacts.
    Deploy: AWS CodePipeline uploads the built app to the S3 bucket.
    Architecture Diagram
    plaintext
    Copy code
    +-------------+         +-----------------+         +------------------------+
    |   GitHub    |  -----> |  AWS CodeBuild  |  -----> |  AWS S3 (Static Site)  |
    | Repository  |         |    Build &      |         |  Hosting for React App |
    +-------------+         |  Artifacts      |         +------------------------+
                            +-----------------+                         
    Source Stage: GitHub repository where the React code is stored.
    Build Stage: CodeBuild compiles the React app into a build/ directory.
    Deploy Stage: CodePipeline deploys the build files to an S3 bucket for hosting.


3. Steps for Setting Up the Pipeline
Prerequisites
Before setting up the pipeline, ensure that you have:

 - An AWS account.
 - A GitHub repository containing your React application.
 - An S3 bucket ready for deployment.
 - IAM roles with proper permissions for CodePipeline, CodeBuild, and S3.


    Step 1: Create an S3 Bucket
     - Go to the S3 console in AWS and create a bucket for hosting the React app (e.g., my-react-app-bucket).
     - Enable static website hosting in the S3 bucket settings.
     - Note down the bucket name and the endpoint URL for later reference.

    Step 2: Create CodeBuild Project
     - Navigate to the AWS CodeBuild console and create a new build project.
     - Source Provider: Select GitHub and connect your GitHub account.
     - Buildspec File: Ensure you have a buildspec.yml file in your repository. This file defines the build commands and the artifacts to be deployed.

        Example buildspec.yml:

            version: 0.2
            phases:
            pre_build:
                commands:
                - echo Installing source NPM dependencies...
                - npm install
            build:
                commands:
                - echo Build started on `date`
                - echo Building the React app...
                - npm run build
                - echo Build completed on `date`
            post_build:
                commands:
                - echo Build completed successfully
                - ls -la
                - pwd
                - ls -la dist
            artifacts:
            files:
                - '**/*'
            base-directory: 'dist'
            discard-paths: no

     - Define the artifacts section to ensure the files in the build/ folder are correctly packaged and ready for deployment.

    Step 3: Create the CodePipeline
     - In the AWS CodePipeline console, create a new pipeline.
     - Source Stage: Choose GitHub as the source provider, and connect your repository.
     - Build Stage: Choose AWS CodeBuild as the build provider and select the previously created build project.
     - Deploy Stage: Choose the S3 bucket as the deployment target. Ensure the bucket is selected and the path for the deployment is correct.


4. Maintaining the Pipeline
    Updating the Pipeline
     - Add More Stages: If needed, you can add additional stages such as testing, security scans, or notifications.
     - Updating Source or Build Configurations: Any change in the repository (e.g., new dependencies) or build requirements should be reflected in the buildspec.yml file.

    Monitoring and Notifications
     - Monitor the Pipeline: Use the AWS CodePipeline console to monitor the status of each stage (Source, Build, Deploy).
     - Set up Notifications: Integrate AWS SNS to send notifications on pipeline failures or successes.


5. Troubleshooting Steps
    Issue 1: Build Fails
    Common Causes: Missing dependencies, incorrect buildspec.yml configuration, Node.js version mismatch.
    Solution: Check the build logs in CodeBuild. Ensure that the npm install and npm run build commands are running correctly.

    Issue 2: Deployment Fails
    Common Causes: Incorrect S3 bucket configuration, permissions issues, missing files in the build directory.
    Solution: Ensure the base-directory in the buildspec.yml file is correctly pointing to the build/ folder, and that the S3 bucket is correctly set up to allow uploads.

    Issue 3: Static Website Not Showing Updates
    Common Causes: Caching issues, missing or incorrect file paths in S3.
    Solution: Clear your browser cache and verify that the correct files are being uploaded to the S3 bucket. You can also enable versioning on the S3 bucket to manage different versions of your files.


6. Upload Documentation to Codebase
    Create a new directory in your repository (e.g., /docs) and add a markdown file (pipeline-setup.md) with the above documentation. You can also include diagrams (if applicable) to make the documentation more clear.

    Example directory structure:

    plaintext
    Copy code
    my-react-app/
    ├── src/
    ├── public/
    ├── build/
    ├── package.json
    ├── buildspec.yml
    ├── /docs/
        └── pipeline-setup.md

7. Conclusion
    This pipeline ensures that your React app is automatically built and deployed to S3 every time there’s a change in the source repository. By following this documentation, you can set up, maintain, and troubleshoot the pipeline effectively.



##### Codepipeline steps and progression #####
### Assumes you have a webapp made and ready
### Using static website made with React

# 1. Create an S3 bucket for Static Website Hosting 
## Enable static website hosting in bucket properties
## Set appropriate bucket policy permissions to allow public read access

# 2. Create CodeBuild
## Link GitHub repo
## Select Lambda and choose a Node.js version compatible with our React app
## Create a buildspec.yml file or edit one on the web console
### buildspec file needs to run npm install during installation and npm run build during build phases

# 3. Create CodePipeline to automate CI/CD
## Select Github as source and choose repo & branch
## Enable webhook for real-time updates
## Add buildstage and link CodeBuild
## Add Deploy stage and choose S3 as deploy provider
## Select S3 Bucket Created in Step 1