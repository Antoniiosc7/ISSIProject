from silence.decorators import endpoint

@endpoint(
    route="/mostcategory/",
    method="GET",
    sql="SELECT * FROM mostcategory"
)
def get_all():
    pass

###############################################################################

