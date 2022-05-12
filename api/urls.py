from django.urls import path
from . import views

urlpatterns = [
    path("prostate/", views.Predict_prostate.as_view()),
]