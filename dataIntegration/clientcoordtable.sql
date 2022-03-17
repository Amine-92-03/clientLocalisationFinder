CREATE TABLE `clientlocalisationdb`.`clientcoordtable` (
  `idclient` INT NOT NULL AUTO_INCREMENT,
  `codePostal` INT NULL,
  `codePays` VARCHAR(45) NULL,
  `latitudeMag` DECIMAL(25) NOT NULL,
  `longitudeMag` DECIMAL(25) NOT NULL,
  PRIMARY KEY (`idclient`));