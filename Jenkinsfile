pipeline{
//    agent any
    
//    tools {
//        terraform 'terraform-1008'
//    }
    
    agent  any
        options {
                timestamps ()
  //              terraform 'terraform'
  //              ansiColor('xterm')
            }
    
    stages{
        stage('Git Checkout'){
            steps {
                git branch: 'main', credentialsId: '82f8771b-6ff4-4398-b2c6-3a515d4ce4f8', url: 'https://github.com/HarshMall28/devopstest'
            }
        }
        
    }
}
