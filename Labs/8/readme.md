### Part 2 1st hour ###
```sh
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted \
--timestamp 2024-11-13T20:30:00Z --value 87 --unit Milliseconds
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted \
--timestamp 2024-11-13T20:30:00Z --value 51 --unit Milliseconds
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted \
--timestamp 2024-11-13T20:30:00Z --value 125 --unit Milliseconds
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted \
--timestamp 2024-11-13T20:30:00Z --value 235 --unit Milliseconds
```

### Part 2 2nd hour ###
```sh
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted \
--timestamp 2024-11-13T21:30:00Z --statistic-values Sum=577,Minimum=65,Maximum=189,SampleCount=5 --unit Milliseconds
```

### Part 2 3rd hour ###
```sh
aws cloudwatch put-metric-data --metric-name RequestLatency --namespace GetStarted \
--timestamp 2024-11-13T22:30:00Z --statistic-values Sum=806,Minimum=47,Maximum=328,SampleCount=6 --unit Milliseconds
```

### Part 2 Step 3 ###
```sh
aws cloudwatch get-metric-statistics --namespace GetStarted --metric-name RequestLatency --statistics Average \
--start-time 2024-11-13T12:00:00Z --end-time 2024-11-14T00:00:00Z --period 60
```

### Part 3 ###

# Manually triggering alarm
```sh
aws cloudwatch set-alarm-state \
--alarm-name "lab8Alarm" \
--state-value ALARM \
--state-reason "Simulating alarm state for testing purposes"

```