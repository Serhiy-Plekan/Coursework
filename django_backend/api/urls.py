from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('linear-trend/', views.linearTrend, name='linear-trend'),
    path('logarithmic-trend/', views.logarithmicTrend, name='logarithmic-trend'),
    path('hyperbolic-trend/', views.hyperbolicTrend, name='hyperbolic-trend'),
    path('smoothing-trend/', views.dataSmoothing, name='smoothing-trend'),

    path('without-three-smoothing/', views.movingAveragesWithoutWeightsThree, name='without-three-smoothing'),
    path('without-five-smoothing/', views.movingAveragesWithoutWeightsFive, name='without-five-smoothing'),
    path('with-three-smoothing/', views.movingAveragesWithWeightsThree, name='with-three-smoothing'),
    path('with-five-smoothing/', views.movingAveragesWithWeightsThree, name='with-five-smoothing'),
]