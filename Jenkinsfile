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
        stage('Build in docker') {
            steps {
                echo 'Build in docker'
                sh '''
                docker build . -t vue_firebase
                docker-compose up
                ping http://localhost:5555 -c 1
                '''
            }
        }
          stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
