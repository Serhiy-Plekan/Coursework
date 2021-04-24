from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from coursework import linear_time_trend, logarithmic_time_trend, hyperbolic_time_trend, smoothing

from django.http import HttpResponse
# Create your views here.

@api_view(['GET'])
def index(request):
    data="penis"
    return Response(data)


@api_view(['POST'])
def linearTrend(request):
    data = [float(i.replace(',', '.')) for i in [j for j in request.data][0].split(' ')]
    final = linear_time_trend(data)
    print(final)
    return Response(final)

@api_view(['POST'])
def logarithmicTrend(request):
    data = [float(i.replace(',', '.')) for i in [j for j in request.data][0].split(' ')]
    final = logarithmic_time_trend(data)
    print(final)
    return Response(final)

@api_view(['POST'])
def hyperbolicTrend(request):
    data = [float(i.replace(',', '.')) for i in [j for j in request.data][0].split(' ')]
    final = hyperbolic_time_trend(data)
    print(final)
    return Response(final)

@api_view(['POST'])
def dataSmoothing(request):
    data = [float(i.replace(',', '.')) for i in [j for j in request.data][0].split(' ')]
    final = smoothing(data)
    print(final)
    return Response(final)