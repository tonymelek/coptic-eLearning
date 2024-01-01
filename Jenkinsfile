pipeline {
    agent any

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
                apk update && apk add docker
                docker build .  -t vue_firebase
                docker-compose up 
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
