const { app } = require('./app')

const port = Number(process.env.PORT) || 3000

app
	.listen(port, () => {
		console.log(`🚀 Server ready at http://localhost:${port}`)
	})
	.on('error', err => {
		console.error('Error while listening', err)
	})