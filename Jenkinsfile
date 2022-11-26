pipeline{
    agent any
    
    tools {
        terraform 'terraform-1008'
    }
    
    stages{
        stage('Git Checkout'){
            steps {
                git branch: 'main', credentialsId: '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', url: 'https://github.com/ShaliniVaibhav/test'
            }
        }
        
        stage('Terraform Init'){
            steps{
                sh label: '',script: 'terraform init'
            }
        }
        
        stage('Terraform apply'){
            steps{
                echo "Terraform action from the parameter is --->${action}"
                sh label: '',script: 'terraform ${action} --auto-approve'
            }
        }
    }
}
