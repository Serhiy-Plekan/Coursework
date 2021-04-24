from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('linear-trend/', views.linearTrend, name='linear-trend'),
    path('logarithmic-trend/', views.logarithmicTrend, name='logarithmic-trend'),
    path('hyperbolic-trend/', views.hyperbolicTrend, name='hyperbolic-trend'),
    path('smoothing-trend/', views.dataSmoothing, name='smoothing-trend'),
]