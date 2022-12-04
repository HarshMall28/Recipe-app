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
                git branch: 'main', credentialsId: 'b87c8e1c-6289-435b-9309-43f608e96a30', url: 'https://github.com/HarshMall28/devopstest'
            }
        }
        
    }
}
