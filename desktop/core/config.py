from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import AnyHttpUrl
from pathlib import Path


# caminho absoluto
BASE_DIR = Path(__file__).resolve().parent.parent


class Settings(BaseSettings):
    APP_NAME: str
    AUTHOR: str
    VERSION: str

    VITE_REACT_URL: AnyHttpUrl
    MAXIMIZED: bool
    DEBUG: bool

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / '.env'
    )


settings = Settings()
