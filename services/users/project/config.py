import os


class BaseConfig:
    "Base Configuration"
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'my_precious'


class DevelopmentConfig(BaseConfig):
    """Development Configuration"""
    SQLALCHEMY_DATABSE_URI = os.getenv('DATABASE_URL')


class TestingConfig(BaseConfig):
    """Testing Config"""
    TESTING = True
    SQLALCHEMY_DATABSE_URI = os.getenv('DATABASE_TEST_URL')


class ProductionConfig(BaseConfig):
    """Production configuration"""
    SQLALCHEMY_DATABSE_URI = os.getenv('DATABASE_URL')
