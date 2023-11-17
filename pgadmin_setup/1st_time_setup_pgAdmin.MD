Install pgadmin 4

1. From welcome / main page, click "Add New Server"

2. Put a name for the Name field, and leave Connect now? toggled on, switch to Connection tab

3. Go to Render.com, copy paste the external database url and then find the portion that starts the same as the hostname provided by render, we copy that entire address through .render.com

4. Leave Port as 5432, leave Maintenance database and Username as postgres, leave Kerberos authentication? toggled off  Leave password and save password? blank and toggled off, leave role and service blank too, click save.  It should now connect!
