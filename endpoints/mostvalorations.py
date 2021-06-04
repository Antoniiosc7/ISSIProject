from silence.decorators import endpoint

@endpoint(
    route="/mostvalorations/",
    method="GET",
    sql="SELECT * FROM mostValorations"
)
def get_all():
    pass

###############################################################################

