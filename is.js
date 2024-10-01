is.num=function num (num){return typeof(num)==="number"}
is.nan=function nan (num){return Number.isNaN(num)}
is.bool=function bool (num){return typeof(num)==="boolean"}
is.str=function str (num){return typeof(num)==="string"}
is.undef=function undef (num){return num===undefined}
is.def=function def (num){return num!=undefined}
is.arr=function arr (num){return Array.isArray(num)}
is.obj=function obj (num){return typeof(num)==="object" && num!=null && !Array.isArray(num)}
is.fun=function fun (num){return typeof(num)==="function"}
is.truthy=function truthy (num){ 
   return num? true:false
}
is.falsy=function falsy(num){
    return !num? true:false
}
