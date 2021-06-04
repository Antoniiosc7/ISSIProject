from silence.decorators import endpoint

@endpoint(
    route="/photoprivacitys",
    method="GET",
    sql="SELECT * FROM PhotoPrivacitys"
)
def get_all():
    pass

###############################################################################

@endpoint(
    route="/photoprivacitys/$userId",
    method="GET",
    sql="SELECT * FROM photoprivacitys WHERE userId = $userId"
)
def get_by_id():
    pass