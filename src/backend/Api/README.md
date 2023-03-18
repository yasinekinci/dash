
<!-- Migration Run  start-->
<!-- First install tool -->
dotnet tool install --global dotnet-ef
<!-- secondary run this script -->
dotnet ef database update
<!-- Migration Run  end-->