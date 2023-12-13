Go to our VM instance, click instance schedules -> create instance schedule

Give it a name, set Region to northamerica-northeast1 (Montreal) -> set start and stop time, select MST for time zone,
select initiate date and end date, set frequency to repeat daily

Once we create it, we can click the instance schedule -> "Add Instances to Schedule"

*** To delete the VM instance, we have to detach it from the VM instance first, then we can delete it.

Go to our VM instance -> click the scheduler, click "Remove Instances From Schedule", then we can delete the instance schedule
