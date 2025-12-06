<?php

namespace App\Service;

use Vich\UploaderBundle\Mapping\PropertyMapping;
use Vich\UploaderBundle\Naming\NamerInterface;

class ApiFixedNamer implements NamerInterface
{
    public function name($object, PropertyMapping $mapping): string
    {
        // On renvoie exactement le même nom que dans imageName
        return $object->getImageName();
    }
}