@echo off
REM Save this with a .bat extension

REM Calculate timestamps using PowerShell
for /f "tokens=*" %%a in ('powershell -Command "(Get-Date).AddHours(-2).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:00Z')"') do set TWO_HOURS_AGO=%%a
for /f "tokens=*" %%a in ('powershell -Command "(Get-Date).AddHours(-1).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:00Z')"') do set ONE_HOUR_AGO=%%a
for /f "tokens=*" %%a in ('powershell -Command "(Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:00Z')"') do set NOW=%%a
for /f "tokens=*" %%a in ('powershell -Command "(Get-Date).AddHours(-3).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:00Z')"') do set START_TIME=%%a

REM First hour - individual data points
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted --timestamp %TWO_HOURS_AGO% --value 87 --unit Milliseconds
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted --timestamp %TWO_HOURS_AGO% --value 51 --unit Milliseconds
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted --timestamp %TWO_HOURS_AGO% --value 125 --unit Milliseconds
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted --timestamp %TWO_HOURS_AGO% --value 235 --unit Milliseconds

REM Second hour - aggregated statistics
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted --timestamp %ONE_HOUR_AGO% --statistic-values Sum=577,Minimum=65,Maximum=189,SampleCount=5 --unit Milliseconds

REM Third hour - current time, aggregated statistics
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted --statistic-values Sum=806,Minimum=47,Maximum=328,SampleCount=6 --unit Milliseconds

REM Retrieve the statistics
aws cloudwatch get-metric-statistics --namespace GetStarted --metric-name RequestLatency --statistics Average --start-time %START_TIME% --end-time %NOW% --period 60

pause