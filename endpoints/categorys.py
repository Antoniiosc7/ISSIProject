from silence.decorators import endpoint

@endpoint(
    route="/categorys",
    method="GET",
    sql="SELECT * FROM Categorys"
)
def get_all():
    pass


###############################################################################

@endpoint(
    route="/categorys/$categoryId",
    method="GET",
    sql="SELECT * FROM Categorys WHERE categoryId = $categoryId"
)
def get_by_photo_id():
    pass

###############################################################################

@endpoint(
    route="/categorys",
    method="POST",
    sql="INSERT INTO Categorys (name) VALUES ($name)",
    description="Creates a new category",
    #auth_required=True,
)
def create(name):
    pass

###############################################################################

@endpoint(
    route="/categorys/$categoryId",
    method="PUT",
    sql="UPDATE Categorys SET name = $name",
    description="Updates an existing photo",
    #auth_required=True,
)
def update(name):
    pass

###############################################################################

@endpoint(
    route="/categorys/$commentaryId",
    method="DELETE",
    sql="DELETE FROM Categorys WHERE commentaryId = $commentaryId",
    description="Removes a photo",
    auth_required=True,
)
def delete():
    pass
