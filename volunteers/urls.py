from django.urls import path
from .views import get_all_volunteers

urlpatterns = [
    path("", get_all_volunteers, name="volunteers_url")
]
