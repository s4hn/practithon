from django.db import models

# Create your models here.
class Volunteer(models.Model):
    volunteer_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.volunteer_name} {self.phone_number} {self.email}"
