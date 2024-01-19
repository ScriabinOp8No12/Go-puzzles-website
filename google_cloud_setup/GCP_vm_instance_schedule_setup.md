Go to our VM instance, click instance schedules -> create instance schedule

Give it a name, set Region to northamerica-northeast1 (Montreal) -> set start and stop time, select MST for time zone,
select initiate date and end date, set frequency to repeat daily

Once we create it, we can click the instance schedule -> "Add Instances to Schedule"

*** To delete the VM instance, we have to detach it from the VM instance first, then we can delete it.

Go to our VM instance -> click the scheduler, click "Remove Instances From Schedule", then we can delete the instance schedule

Update 1/19/2024: Looks like the current new VM takes 8-9 minutes past the initial startup time to actually start up, and the VM gets shut off roughly 8-9 minutes after the scheduled stop time too.
