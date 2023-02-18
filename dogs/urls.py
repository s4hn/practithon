from django.urls import path
from .views import get_doggos_list

urlpatterns = [
    path("", get_doggos_list, name="doggos_url")
]
