from silence.decorators import endpoint

@endpoint(
    route="/mostfollows/",
    method="GET",
    sql="SELECT * FROM mostfollows"
)
def get_all():
    pass

###############################################################################

