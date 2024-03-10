pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerId')
  }
  stages {
    stage('DataBaseBuild') {
      steps {
        sh 'docker build -t priyabrata03/store_front_end .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push priyabrata03/store_front_end '
      }
    }
    stage('Deploy'){
        steps{
            sh 'docker-compose -f store.yaml up -d'
        }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}