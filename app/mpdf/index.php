<?php

$html = '
<html>
<head>
<style>
@page { sheet-size: Letter; }

body {
  font-family: sans;
	font-size: 13pt;
  color:#383838;line-height:20px;
}
p {	margin: 0pt; }
br { height:5px;}
table.footer tr td.top { border-top: 0.15mm solid #1aa0dc; padding-top:25px; vertical-align:middle; }
table.footer tr td { font-size:11px; } 
table.items { }

td { vertical-align: top; }
.items td { border-bottom: 0.1mm solid #999999; vertical-align:middle }
table thead td { background-color: #EEEEEE;
	text-align: center;
	font-variant: small-caps;
}
.items td.blanktotal {
	background-color: #FFFFFF;
	border:none;
}
.items tr.total td { border-top:#999999 solid 0.2mm; }
.items td.totals {
	text-align: right;
  border-bottom:none;
}
.items td.cost {
	text-align: "." center;
}
</style>
</head>
<body>

<!--mpdf
<htmlpageheader name="myheader">
<table width="100% class="header"">
  <tr>
    <td width="100%" style="color:#0000BB; "><img src="logo.png" style="max-width:250px"></td>
  </tr>
</table>
</htmlpageheader>

<htmlpagefooter name="myfooter">
<table class="footer" width="100%"  cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td width="30%" class="top">
    <table border="0">
      <tr>
        <td valign="middle"><img src="cursor.png" style="max-width:15px;"></td>
        <td valign="middle"><span style="color:#999999;"> <b>www.nertek.mx</b></span></td>
      </tr>
      <tr>
        <td valign="middle"><img src="email.png" style="max-width:15px;"></td>
        <td valign="middle"><span style="color:#999999;"> <b>contacto@nertek.mx</b></span></td>
      </tr>
    </table>
    </td>
    <td width="35%" align="center" class="top"><b><span style="color:#999999;">Grupo Nertek S.A. De C.V.</span></b></td>
    <td width="35%" align="right" class="top"><b><span style="color:#999999;">RFC GNE181107NI2<br>Monterrey N.L. México</span></b></td>
  </tr>
</table>

</htmlpagefooter>

<sethtmlpageheader name="myheader" value="on" show-this-page="1" />
<sethtmlpagefooter name="myfooter" value="on" />
mpdf-->
<br /><br /><br />
<table width="100%">
  <tr>
  <td width="100%" style="text-align: right;">
  <span style="font-weight: bold; font-size: 30px; letter-spacing:-1px;color:#333333;">Remisión</span><br>
  <span style="color:#999999; font-size:13px; ">Remisión No. </span><span style="color:#cc0000;font-size:13px;"><b>#052</b></span>
<br /><br />
  </td>
</tr></table>
<br/>
<table width="100%" style="font-size: 9pt; border-collapse: collapse; border:none; " cellpadding="8" >
<tr>
<td colspan="4"><span style="font-size: 10pt; color: #1aa0dc; font-family: sans;"><b>A la atención de:</b></span><br>Luis Cruz<br></td>
</tr>
<tr>
<td width="27%"><b>KFNA</b><br> Monterrey, N.L.</td>
<td width="20%" align="right"><b>Cuenta No.</b><br />182906-C</td>
<td width="24%" align="right"><b>Fecha de emisión</b><br>02 de Julio del 2018</td>
<td width="19%" align="right"><b>Vigencia</b><br>30 días</td>
</tr>
</table>

<br /><br /><br />

<table class="items" width="100%" style="font-size: 9pt; border-collapse: collapse; line-height:18px " cellpadding="8">
  <thead>
    <tr>
      <td width="50%" style="background-color:#fff;color:#333; font-size:9pt;" align="left"><b>CONCEPTO</b></td>
	  <td width="9%" style="background-color:#1aa0dc;color:#fff; font-size:8pt;"><b>CANT</b></td>
	  <td width="9%" style="background-color:#1aa0dc;color:#fff; font-size:8pt;"><b>UNIDAD</b></td>
	  <td width="18%" style="background-color:#1aa0dc;color:#fff; font-size:8pt;"><b>PRECIO UNITARIO</b></td>
	  <td width="15%" style="background-color:#1aa0dc;color:#fff; font-size:8pt;"><b>IMPORTE</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
	  <td align="left"><b>RECUPERACIÓN DE VIGAS</b><br>Recuperación de vigas según especificaciones de proveedor. Incluye:
herramienta, maquinaria, mano de obra, equipo y todo lo necesario
para su correcta ejecución.<br><br>Con Referencia a la Orden de Salida No. 2182</td>
 	  <td align="center" style="background-color:#f3f3f3;">$499.00</td>
	  <td align="center" style="background-color:#f3f3f3;">Pza</td>
	  <td align="center" style="background-color:#f3f3f3;">3 kg</td>
	  <td class="cost" style="background-color:#f3f3f3;">$0.00</td>
	</tr>
	
	<tr>
	  <td class="blanktotal" colspan="3" rowspan="3">
	    <br />
	    
		<br>
		
	  </td>
	  <td class="totals"><b>Subtotal:</b></td>
	  <td class="totals cost">$0.00</td>
	</tr>
    <tr>
	  <td class="totals"><b>I.V.A.</b></td>
	  <td class="totals cost">$0.00</td>
    </tr>
    <tr class="total">
    <td class="totals"><b>TOTAL</b></td>
    <td class="totals cost"><b>$0.00</b></td>
    </tr>
  </tbody>
</table>



<br><br><br><br><br><br>
<table width="100%" style="font-size: 9pt; border-collapse: collapse; border:none;line-height:17px;" cellpadding="0" border="0">
  <tr>
    <td width="100%" align="center"><img src="lc.png" style="max-width:150px"><hr width="30%"><br><b>Luis Alfonso Cruz Rodriguez</b><br />
Ejecutivo de Cuenta
</td>
  </tr>
</table>
</body>
</html>';

$path = (getenv('MPDF_ROOT')) ? getenv('MPDF_ROOT') : __DIR__;
require_once $path . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf([
	'margin_left' => 12,
	'margin_right' => 12,
	'margin_top' => 32,
	'margin_bottom' => 10,
	'margin_header' => 12,
	'margin_footer' => 10
]);

$mpdf->SetProtection(array('print'));
$mpdf->SetTitle("Remisión - Grupo Nertek S.A de C.V.");
$mpdf->SetAuthor("Grupo Nertek SA de CV");
$mpdf->SetDisplayMode('fullpage');
//$mpdf->SetWatermarkText('CANCELADO');
//$mpdf->showWatermarkText = true;

$mpdf->WriteHTML($html);

$mpdf->Output();
//$mpdf->Output('../ct/ct-bacteria-052.pdf','F');
