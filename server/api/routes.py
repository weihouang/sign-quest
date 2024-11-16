from api.user import user_api

def SetupRoutes(app, api):
    api.add_namespace(user_api, path='/users')
    api.init_app(app)