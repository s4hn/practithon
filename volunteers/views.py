import json
from django.http import JsonResponse
from .common.encoders import VolunteerEncoder
from django.views.decorators.http import require_http_methods
from .models import Volunteer

@require_http_methods(["GET"])
def get_all_volunteers(request):
    if request.method == "GET":
        volunteers = Volunteer.objects.all()
        return JsonResponse(volunteers, encoder=VolunteerEncoder, safe=False)
