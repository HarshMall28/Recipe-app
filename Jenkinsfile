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
                git branch: 'main', credentialsId: '7a9b127c-0e84-4687-8904-70679fd38bfe', url: 'https://github.com/HarshMall28/devopstest'
            }
        }
        
    }
}
