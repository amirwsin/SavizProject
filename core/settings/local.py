from .settings import *

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "static/"
STATICFILES_DIRS = [
    BASE_DIR / "staticfiles/"
]
MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media/"
