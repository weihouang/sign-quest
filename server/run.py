from os import environ as env

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from api.routes import SetupRoutes


load_dotenv(find_dotenv())

app = Flask(__name__)
api = Api(title='CoreRed API', version='1.0', description='API Documentation')
CORS(app)
SetupRoutes(app, api)

app.secret_key = env.get("APP_SECRET_KEY")

oauth = OAuth(app)

oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))

# 7CUEuXcTahv60cc0 redditbot