from django.db import models

# Create your models here.
class Dog(models.Model):
    name = models.CharField(max_length=200)
    species = models.CharField(max_length=200)
    sex = models.CharField(max_length=200)
    status = models.CharField(max_length=200)
    age = models.SmallIntegerField()
    picture = models.URLField(null=True, blank=True)
    intake_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} was brought in on {self.intake_date}"


class AdoptionForm(models.Model):
    adopter_name = models.CharField(max_length=200)
    application_status = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.adopter_name} wants to adopt dog: {self.id}"
