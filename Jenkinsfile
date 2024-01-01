pipeline {
    agent {
        node {
            label 'alpine_agent'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout completed'
            }
        }
        stage('Build') {
            steps {
                echo 'Building'
                docker build .  -t vue_firebase
                docker-compose up 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }
          stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
