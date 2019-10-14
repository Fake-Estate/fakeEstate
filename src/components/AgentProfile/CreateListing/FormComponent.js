import React, { Component } from 'react'

import CreateListing from './CreateListing'
import Style from './Style'
//type
import InteriorFeatures from './InteriorFeatures'
import ExteriorFeatures from './ExteriorFeatures'
import Inclusions from './Inclusions'
import OtherFeatures from './OtherFeatures'
//hoa
import RoomsIncluded from './RoomsIncluded'


export default class FormComponent extends Component {
    constructor(){
        super()
        this.state = {
            currentStep: 1,
            mls: '',
            address: '',
            city: '',
            state: '',
            zip: undefined,
            acre: undefined,
            sqft: undefined,
            bedrooms: undefined,
            bathrooms: undefined,
            price: undefined,
            description: '',
            artDeco: false,
            capeCod: false,
            countryFrench: false,
            colonial: false,
            contemporary: false,
            cottage: false,
            craftsman: false,
            dutchColonial: false,
            farmhouse: false,
            federal: false,
            frenchProvincial: false,
            georgianColonial: false,
            greekRevival: false,
            italianate: false,
            log: false,
            mediterranean: false,
            midCenturyModern: false,
            modern: false,
            neoclassical: false,
            prairie: false,
            pueblo: false,
            shingle: false,
            southwest: false,
            traditional: false,
            ranch: false,
            tudor: false,
            victorian: false,
            apartment: false,
            bungalow: false,
            cabin: false,
            condo: false,
            container: false,
            domeType: false,
            mobile: false,
            multiFamily: false,
            singleFamily: false,
            tiny: false,
            townhome: false,
            centralAir: false,
            electricAir: false,
            windowAir: false,
            portableAir: false,
            daylight: false,
            walkout: false,
            crawlSpace: false,
            none: false,
            partial: false,
            slab: false,
            subBasement: false,
            cellar: false,
            unfinished: false,
            partiallyFinished: false,
            finished: false,
            master: false,
            separateTubShower: false,
            conventional: false,
            cathedral: false,
            coveCeiling: false,
            suspended: false,
            tray: false,
            coffed: false,
            vaulted: false,
            shed: false,
            beamed: false,
            barrelVault: false,
            tall: false,
            dome: false,
            groinVault: false,
            exposed: false,
            walkIn: false,
            reachIn: false,
            wardrobe: false,
            granite: false,
            quartz: false,
            laminate: false,
            concrete: false,
            recycledGlass: false,
            butcherblock: false,
            marble: false,
            ceramincTile: false,
            lava: false,
            resin: false,
            reclaimedWood: false,
            stainlessSteel: false,
            solidSurface: false,
            soapstone: false,
            porcelain: false,
            den: false,
            builtInDish: false,
            portableDish: false,
            disposal: false,
            paneled: false,
            metal: false,
            pvc: false,
            flush: false,
            battened: false,
            bamboo: false,
            glass: false,
            aluminum: false,
            wooden: false,
            fiberglass: false,
            fiberReinforced: false,
            hinged: false,
            dutch: false,
            pocket: false,
            roller: false,
            bifold: false,
            sliding: false,
            pivot: false,
            french: false,
            carpet: false,
            hardwood: false,
            laminate: false,
            linoleum: false,
            tile: false,
            vinyl: false,
            floorDrains: false,
            gasLog: false,
            forcedAir: false,
            gasCentral: false,
            jettedTub: false,
            second: false,
            recessed: false,
            track: false,
            underCabinet: false,
            pendants: false,
            chandeliers: false,
            wallSconces: false,
            surface: false,
            coveLighting: false,
            soffit: false,
            valance: false,
            baseboards: false,
            batten: false,
            bead: false,
            chairRail: false,
            crown: false,
            coveTrim: false,
            dentil: false,
            eggDart: false,
            doorWindow: false,
            pearl: false,
            pictureRail: false,
            showQuarter: false,
            wainscoting: false,
            builtInOven: false,
            freestanding: false,
            electricOven: false,
            gasOven: false,
            dualFuel: false,
            straight: false,
            straightCentralLighting: false,
            Lshaped: false,
            Ushaped: false,
            winder: false,
            spiral: false,
            circular: false,
            curved: false,
            ladder: false,
            split: false,
            floating: false,
            switchback: false,
            singleHung: false,
            doubleHung: false,
            arched: false,
            awning: false,
            bay: false,
            bow: false,
            casement: false,
            garden: false,
            glassBlock: false,
            hopper: false,
            jalousie: false,
            picture: false,
            round: false,
            skylight: false,
            sliding: false,
            storm: false,
            transform: false,
            custom: false,
            blinds: false,
            shutters: false,
            wovenWood: false,
            celluar: false,
            pleated: false,
            venetian: false,
            vertical: false,
            shoji: false,
            panel: false,
            roman: false,
            roller: false,
            drapery: false,
            curtains: false,
            cafe: false,
            austrian: false,
            solar: false,
            atticFan: false,
            balcony: false,
            basementEntrance: false,
            coveredDeck: false,
            uncoveredDeck: false,
            doublePaned: false,
            outdoorLighting: false,
            coveredPatio: false,
            uncoveredPatio: false,
            wrapAround: false,
            front: false,
            back: false,
            slidingGlassDorrs: false,
            veranda: false,
            attched: false,
            coveredParking: false,
            uncoveredParking: false,
            tandem: false,
            opener: false,
            rvPad: false,
            boatPad: false,
            stone: false,
            stucco: false,
            cementBoard: false,
            metalSiding: false,
            aluminumSiding: false,
            brick: false,
            wood: false,
            vinylSiding: false,
            fiberCement: false,
            culturedStone: false,
            culDeSac: false,
            curbGutter: false,
            fence: false,
            secludedYard: false,
            sprinklers: false,
            landscaping: false,
            full: false,
            matureTrees: false,
            pines: false,
            fruitTrees: false,
            vegGarden: false,
            asphaltShingles: false,
            pitched: false,
            wooded: false,
            flat: false,
            lake: false,
            mountain: false,
            valley: false,
            alarmSystem: false,
            ceilingFan: false,
            washer: false,
            dryer: false,
            fireplaceInsert: false,
            refrigerator: false,
            freezer: false,
            hotTub: false,
            microwave: false,
            rangeHood: false,
            satelliteDish: false,
            storageShed: false,
            swing: false,
            tramp: false,
            waterSoftener: false,
            windowCoverings: false,
            centralVac: false,
            bbq: false,
            bikingTrails: false,
            clubHouse: false,
            gym: false,
            maintenancePaid: false,
            petRules: false,
            petsPermitted: false,
            playground: false,
            park: false,
            poolHOA: false,
            sauna: false,
            sewerPaid: false,
            trashPaid: false,
            waterPaid: false,
            snowRemoval: false,
            storageArea: false,
            tennisCourtHOA: false,
            picnicArea: false,
            livingRoom: false,
            formalLivingRoom: false,
            familyRoom: false,
            kitchen: false,
            kitchenette: false,
            diningRoom: false,
            formalDiningRoom: false,
            breakfastNook: false,
            gameRoom: false,
            mediaRoom: false,
            homeOffice: false,
            gymHome: false,
            indoorSportsFacility: false,
            library: false,
            storageRoom: false,
            parlor: false,
            foyer: false,
            coldStorage: false,
            dressingRoom: false,
            greatRoom: false,
            mudRoom: false,
            homeBar: false,
            sunroom: false,
            conservatory: false,
            powderBath: false,
            cable: false,
            dryerHookups: false,
            exerciseRoom: false,
            homeWarrenty: false,
            parkPlayground: false,
            swimmingPool: false,
            tennisCourt: false,
            gas: false,
            power: false,
            public: false,
            septicTank: false,
            water: false,
            culinary: false,
            secondary: false,
            
        }
    }
    
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    hcArtDeco = () => {
        if(checked){
            console.log(checked)
        this.setState({
            artDeco: !this.state.artDeco
        })
    }
    }
    
    hcCapeCod = () => {
        this.setState({
            capeCod: !this.state.capeCod
        })
    }

    hcCountryFrench = () => {
        this.setState({
            countryFrench: !this.state.countryFrench
        })
    }

    hcColonial = () => {
        this.setState({
            colonial: !this.state.colonial
        })
    }

    hcContemporary = () => {
        this.setState({
            contemporary: !this.state.contemporary
        })
    }

    hcCottage = () => {
        this.setState({
            cottage: !this.state.cottage
        })
    }

    hcCraftsman = () => {
        this.setState({
            craftsman: !this.state.craftsman
        })
    }

    hcDutchColonial = () => {
        this.setState({
            dutchColonial: !this.state.dutchColonial
        })
    }

    hcFarmhouse = () => {
        this.setState({
            farmhouse: !this.state.farmhouse
        })
    }

    hcFederal = () => {
        this.setState({
            farmfederal: !this.state.federal
        })
    }

    hcFrenchProvincial = () => {
        this.setState({
            frenchProvincial: !this.state.frenchProvincial
        })
    }

    hcGeorgianColonial = () => {
        this.setState({
            georgianColonial: !this.state.georgianColonial
        })
    }

    hcGreekRivial = () => {
        this.setState({
            greekRevival: !this.state.greekRevival
        })
    }





    render() {
        return (
            <div>
                <CreateListing 
                mls={mls} 
                address={address} 
                city={city} 
                zip={zip} 
                acre={acre} 
                sqft={sqft} 
                beds={bedrooms} 
                baths={bathrooms} 
                price={price} 
                description={description} 
                handleChange={this.handleChange}
                />
                <Style 
                artDeco={artDeco} 
                capeCode={capeCode} 
                countryFrench={countryFrench} 
                colonial={colonial} 
                contemporary={contemporary} 
                cottage={cottage} 
                craftsman={craftsman} 
                dutchColonial={dutchColonial} 
                farmhouse={farmhouse} 
                federal={federal} 
                frenchProvincial={frenchProvincial} 
                georgianColonial={georgianColonial} 
                greekRevival={greekRevival} 
                italianate={italianate} 
                log={log} 
                mediterranean={mediterranean} 
                midCenturyModern={midCenturyModern} 
                modern={modern} 
                neoclassical={neoclassical} 
                prairie={prairie} 
                pueblo={puelbo} 
                shingle={shingle} 
                southwest={southwest} 
                traditional={traditional} 
                ranch={ranch} 
                tudor={tudor} 
                victorian={victorian}  
                hcArtDeco={this.hcArtDeco}
                hcCapeCod={this.hcCapeCod}
                hcCountryFrench={this.hcCountryFrench}
                hcColonial={this.hcColonial}
                hcContemporary={this.hcContemporary}
                hcCottage={this.hcCottage}
                hcCraftsman={this.hcCraftsman}
                hcDutchColonial={this.hcDutchColonial}
                hcFarmhouse={this.hcFarmhouse}
                hcFederal={this.hcFederal}
                hcFrenchProvincial={this.hcFrenchProvincial}
                hcGreekRivial={this.hcGreekRivial}
                />
                {/* <Type 
                apartment={apartment} 
                bungalow={bungalow} 
                cabin={cabin} 
                condo={condo} 
                container={container} 
                domeType={domeType} 
                mobile={mobile} 
                multiFamily={mutiFamily} 
                singleFamily={singleFamily} 
                tiny={tiny} 
                townhome={townhome}
                 />   */}
                <InteriorFeatures 
                centralAir={centralAir} 
                electricAir={electricAir} 
                windowAir={windowAir} 
                portableAir={portableAir} 
                daylight={daylight} 
                walkout={walkout} 
                crawlSpace={crawlSpace} 
                none={none} 
                partial={partial} 
                slab={slab} 
                subBasement={subBasement} 
                cellar={cellar} 
                unfinished={unfinished} 
                partiallyFinished={partiallyFinished} 
                finished={finsihsed} 
                master={master} 
                separateTubShower={showerTubShower} 
                conventional={conventional} 
                coveCeiling={coveCeiling} 
                suspended={suspended} 
                tray={tray} 
                coffed={coffed} 
                vaulted={vaulted} 
                shed={shed} 
                beamed={beamed} 
                barrelVault={barrelVault} 
                tall={tall} 
                dome={dome} 
                groinVault={groinVault} 
                exposed={exposed} 
                walkIn={walkIn} 
                reachIn={reachIn} 
                wardrobe={wardrobe} 
                granite={granite} 
                quartz={quartz} 
                laminate={lamitate} 
                contrete={contrete} 
                recycledGlass={recycledGlass} 
                butcherblock={butcherblock} 
                marble={marble} 
                ceramicTile={ceramicTile} 
                lava={lava} resin={resin} 
                reclaimedWood={reclaimedWood} 
                stainlessSteel={stainlessSteel}
                solidSurface={solifSurface}
                soapstone={soapstone}
                porcelain={porcelain}
                den={den}
                builtInDish={builtInDish}
                portableDish={portableDish}
                disposal={disposal}
                paneled={paneled}
                metal={metal}
                pvc={pvc}
                flush={flush}
                battened={battened}
                bamboo={bamboo}
                glass={glass}
                aluminum={aluminum}
                wooden={wooden}
                fiberglas={fiberglass}
                fiberReinforced={fiberReinforced}
                hinged={hinged}
                dutch={dutch}
                pocket={pocket}
                roller={roller}
                bifold={bifold}
                sliding={sliding}
                pivot={pivot}
                french={french}
                carpet={carpet}
                hardwood={hardwood}
                laminate={laminate}
                linolium={linolium}
                tile={tile}
                vinyl={vinyl}
                floorDrains={floorDrains}
                gasLog={gasLog}
                forcedAir={forcedAir}
                gasCentral={gasCentral}
                jettedTub={jettedTub}
                second={second}
                recessed={recessed}
                track={track}
                underCabinet={underCabinet}
                pendants={pendants}
                chandeliers={chandeliers}
                wallSconces={wallSconces}
                surface={surface}
                coveLighting={coveLighting}
                soffit={soffit}
                valance={valance}
                baseboards={baseboards}
                batten={batten}
                bead={bead}
                chairRail={chairRail}
                crown={crown}
                coveTrim={coveTrim}
                dentil={dentil}
                eggDart={eggDart}
                doorWindow={doorWindow}
                pearl={pearl}
                pictureRail={pictureRail}
                showQuarter={showQuarter}
                wainscoting={wainscoting}
                builtInOven={builtInOven}
                freestanding={freestanding}
                electricOven={electricOven}
                gasOven={gasOven}
                dualFuel={dualFuel}
                straight={straight}
                straightCentralLighting={straightCentralLighting}
                Lshaped={Lshaped}
                Ushaped={Ushaped}
                winder={winder}
                spiral={spiral}
                circular={circular}
                curved={curved}
                ladder={ladder}
                split={split}
                floating={floating}
                switchback={switchback}
                singleHung={singleHung}
                doubleHung={doubleHung}
                arched={arched}
                awning={awning}
                bay={bay}
                bow={bow}
                casement={casement}
                garden={garden}
                glassBlock={glassBlock}
                hopper={hopper}
                jalouise={jalouise}
                picture={picture}
                round={round}
                skylight={skylight}
                sliding={sliding}
                storm={storm}
                transform={transform}
                custom={custom}
                blinds={blinds}
                shutters={shutters}
                wovenWood={wovenWood}
                cellular={cellular}
                pleated={pleated}
                venetian={venetian}
                vertical={vertical}
                shoji={shoji}
                panel={panel}
                roman={roman}
                roller={roller}
                drapery={drapery}
                curtains={curtains}
                cafe={cafe}
                austrian={austrian}
                solar={solar}
                />
                <ExteriorFeatures 
                atticFan={atticFan}
                balcony={balcony}
                basementEntrance={basementEntrance}
                coveredDeck={coveredDeck}
                uncoveredDeck={uncoveredDeck}
                doublePaned={doublePaned}
                outdoorLighting={outdoorLighting}
                coveredPatio={coveredPatio}
                uncoveredPatio={uncoveredPatio}
                tandem={tandem}
                opener={opener}
                rvPad={rvPad}
                boatPad={boatPad}
                stone={stone}
                stucco={stucco}
                cementBoard={cementBoard}
                metalSiding={metalSiding}
                aluminumSiding={aluminumSiding}
                brick={brick}
                wood={wood}
                vinylSiding={vinylSiding}
                fiberCement={FiberCement}
                culturedStone={culturedStone}
                culDeSac={culDeSac}
                fence={fence}
                secludedYard={secludedYard}
                sprinklers={sprinklers}
                landscaping={landscaping}
                full={full}
                matureTrees={matureTrees}
                pines={pines}
                fruitTrees={fruitTrees}
                vegGarden={vegGarden}
                asphaltShingles={asphaltShingles}
                pitched={pitched}
                flat={flat}
                lake={lake}
                mountain={mountain}
                valley={valley}
                />
                <Inclusions 
                alarmSystem={alarmSystem}
                ceilingFan={ceilingFan}
                washer={washer}
                dryer={dryer}
                fireplaceInsert={fireplaceInsert}
                refrigerator={refrigerator}
                freezer={freezer}
                hotTub={hotTub}
                microwave={microwave}
                rangeHood={rangeHood}
                satelliteDish={satelliteDish}
                storageShed={storageShed}
                swing={swing}
                tramp={tramp}
                waterSoftener={waterSoftener}
                windowCoverings={windowCoverings}
                centralVac={centralVac}
                />
                <OtherFeatures 
                cable={cable}
                dreyerHookups={dreyerHookups}
                exerciseRoom={exerciseRoom}
                homeWarrenty={homeWarrenty}
                parkPlayground={parkPlayground}
                swimmingPool={swimmingPool}
                tennisCourt={tennisCourt}
                gas={gas}
                power={power}
                public={public}
                septicTank={septicTank}
                water={water}
                culinary={culinary}
                secondary={secondary}
                />
                {/* <HOA 
                bbq={bbq}
                bikingTrails={bikingTrails}
                clubHouse={clubHouse}
                gym={gym}
                maintenancePaid={maintenancePaid}
                petRules={petRules}
                petsPermitted={petsPermitted}
                playground={playground}
                park={park}
                poolHOA={poolHOA}
                sauna={sauna}
                sewerPaid={sewerPaid}
                trashPaid={trashPaid}
                waterPaid={waterPaid}
                snowRemoval={snowRemoval}
                storageArea={storageArea}
                tennisCourtHOA={tennisCourtHOA}
                picnicArea={picnicArea}
                /> */}
                <RoomsIncluded 
                livingRoom={livingRoom}
                formalLivingRoom={formalLivingRoom}
                familyRoom={familyRoom}
                kitchen={knitchen}
                kitchenette={kitchenette}
                diningRoom={diningRoom}
                formalDiningRoom={formalDiningRoom}
                breakfastNook={breakfastNook}
                gameRoom={gameRoom}
                mediaRoom={mediaRoom}
                homeOffice={homeOffice}
                gymHome={gymHome}
                indoorSportsFacility={indoorSportsFacility}
                library={library}
                storageRoom={storageRoom}
                parlor={parlor}
                foyer={foyer}
                coldStorage={coldStorage}
                dressingRoom={dressingRoom}
                greatRoom={greatRoom}
                mudRoom={mudRoom}
                homeBar={homeBar}
                sunroom={sunroom}
                conservatory={conservatory}
                powderBath={powderBath}
                />

            </div>
        )
    }
}
