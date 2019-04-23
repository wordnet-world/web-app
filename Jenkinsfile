node {
    def scmVars = checkout scm
    stage('Env outside') {
        sh 'env'
        sh "echo ${scmVars.GIT_COMMIT}"
    }
    /* Requires the Docker Pipeline plugin to be installed */
    docker.image('node:7-alpine').inside {
        stage('Env inside') {
            sh 'env'
        }
    }
}