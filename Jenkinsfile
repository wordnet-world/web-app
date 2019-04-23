node {
    stage('Env outside') {
        sh 'env'
    }
    /* Requires the Docker Pipeline plugin to be installed */
    docker.image('node:7-alpine').inside {
        stage('Env inside') {
            sh 'env'
        }
    }
}