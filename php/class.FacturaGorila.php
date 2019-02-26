<?php
class FacturaGorila {  
    private $curl;  
    public $httpCode = '';
    private $apiFkGo = 'https://app.facturagorila.com/v2/Api/'; // Api v2 - Factura Gorila 
    private $headers = array( 
                                'Content-Type: text/json; charset=utf-8', 
                                'ApiKey: PVgfTrURFqu3lUZjPm7yWRlTfWLlDCb50yfEe97frkZLJZfHdUoQZCD6YLieetIqY3dXA1fkHts=',
                                'Authorization: bHVpc0BuZXJ0ZWsubXg6QmFsY29uZXMjMTMxMg==');

    /** 
     * Inicializa el objeto curl con las opciones por defecto. 
     * Si es null se crea 
     */  
    public function __construct() {
        // var_dump($this->headers);
        $this->curl = curl_init();  

        // curl_setopt($this->curl, CURLOPT_USERAGENT, $this->userAgent);  
        curl_setopt($this->curl, CURLOPT_HTTPHEADER, $this->headers ); 
        curl_setopt($this->curl, CURLOPT_RETURNTRANSFER,true);  
        curl_setopt($this->curl, CURLOPT_CONNECTTIMEOUT, 5);  
        curl_setopt($this->curl, CURLOPT_TIMEOUT, 60);  
    }  
 
    /** 
     * Envía una petición POST a la URL especificada 
     * @param string $url 
     * @param array $post_elements 
     * @return string Respuesta generada por el servidor 
     */  
    public function post($url, $post_elements) {  
        $url_completa = $this->apiFkGo.$url;
        curl_setopt($this->curl, CURLOPT_URL, $url_completa );  
        curl_setopt($this->curl, CURLOPT_CUSTOMREQUEST, "POST"); 
        curl_setopt($this->curl, CURLOPT_POST,true);  
        curl_setopt($this->curl, CURLOPT_POSTFIELDS, $post_elements);  
        $result = curl_exec ($this->curl);  
        $this->_close();  
        return $result;  
    }  

    /** 
     * Cierra la conexión 
     */  
    private function _close() {  
        $this->httpCode = curl_getinfo($this->curl, CURLINFO_HTTP_CODE);
        curl_close($this->curl);  
    }  

}

$obj = new FacturaGorila();
$result = $obj->post("Clientes",NULL);
echo '<pre>';
print_r(json_decode($result));

?>