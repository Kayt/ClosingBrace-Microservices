class BaseConfig:
    "Base Configuration"
    TESTING = False


class DevelopmentConfig(BaseConfig):
    """Development Configuration"""
    pass


class TestingConfig(BaseConfig):
    """Testing Config"""
    TESTING = True


class ProductionConfig(BaseConfig):
    """Production configuration"""
    pass
