pipeline {
    agent {
        node {
            label 'jenkins_nodejs_agent'
          
    }
    }
    triggers {
                cron('H */4 * * 1-5')
            }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout completed'
            }
        }
        stage('Build') {
            steps {
                sh '''
                echo 'Building'
                npm i -dd
                npm run build
                '''
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
