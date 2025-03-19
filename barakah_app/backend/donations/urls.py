# donations/urls.py
from django.urls import path
from .views import CampaignDonationsView, CreateDonationView, UpdateDonationView 

urlpatterns = [
    path('campaign/<slug:slug>/donations/', CampaignDonationsView.as_view(), name='campaign-donations'),
    path('<slug:slug>/create-donation/', CreateDonationView.as_view(), name='create-donation'),
    path('<int:donation_id>/update-donation/', UpdateDonationView.as_view(), name='update-donation'),
]