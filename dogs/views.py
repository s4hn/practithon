import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Dog
from .common.encoders import DoggoEncoder


@require_http_methods(["GET"])
def get_doggos_list(request):
    if request.method == "GET":
        doggos = Dog.objects.all()
        return JsonResponse(doggos, encoder=DoggoEncoder, safe=False)
