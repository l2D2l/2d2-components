import { Component, h, Prop } from "@stencil/core";

@Component({
    tag:'personal-card',
    styleUrl:'personal-card.css',
    shadow:true
})

export class PersonalCard {

    @Prop() firstName: string="";
    @Prop() lastName: string="";

    render() {
        
        return (
            <div> 
                personal-card component
                <h1>
                    {this.firstName}
                </h1>
                <h1>
                    {this.lastName}
                </h1>
            </div>
        )

    }

}