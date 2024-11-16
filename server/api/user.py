from flask_restx import Namespace, Resource, fields
from db.database import get_db
import bson
from flask import request
from datetime import datetime

user_api = Namespace('users', description='User operations')

@user_api.route('/user/v1/by-email')
class ByEmail(Resource):
    @user_api.doc('get-user-by-email')
    @user_api.param('email', 'The email address to find the user by', _in='query')
    def get(self):
        db = get_db()
        email = request.args.get('email')
        
        user = db.user.find_one({'email': email})
        if not user:
            return {'message': 'User not found'}, 404

        user_data = {
            key: str(value) if isinstance(value, (bson.objectid.ObjectId, datetime)) else value
            for key, value in user.items()
        }
        friendships = db.follow.find({'$or': [{'friend_one': email}, {'friend_two': email}]})

        friends_emails = set()
        for friendship in friendships:
            if friendship['friend_one'] != email:
                friends_emails.add(friendship['friend_one'])
            if friendship['friend_two'] != email:
                friends_emails.add(friendship['friend_two'])

        friends_info = list(friends_emails)

        user_data['friends'] = friends_info

        return user_data